const io = require("socket.io")(4000);
const GPS = require('../models/GPS');
const sendMessege = (socket, event, sensor) => {
    socket?.emit(event, sensor);
};

let sockets = [];
let liveDataRequests = [];

const recieveMessage = (socket) => {
    socket.on("LIVE_DATA", (msg) => {
        const deviceId = msg?.deviceId;
        liveDataRequests = liveDataRequests.filter(
            (item) => item.socket.id != socket.id
        );
        liveDataRequests.push({
            socket: socket,
            deviceId: deviceId,
        });
    });
};

const recievePastData = async (socket) => {

};

const recieveAllDevices = async (socket) => {
    socket.on("ALL_DEVICES_LIST", async (msg) => {
        const list = await device.getAllDevicesList();
        console.log(list);
        sendMessege(socket, "ALL_DEVICES_LIST", list);
    });
};

module.exports = function () {
    console.log("SOCKET INTIATED!");
    io.on("connection", async (socket) => {
        recieveMessage(socket);
        // recieveAllDevices(socket);
        // recievePastData(socket);
        console.log("New", socket.id);
        await sockets.push(socket);
    });

    io.on("disconnect", (socket) => {
        console.log("Socket Disconnected", socket.id);
        socket.disconnect();
        sockets = sockets.filter((item) => item.id !== socket.id);
    });
};

const checkInDatabase = async (deviceId) => {
    let user = [];
    await Device.findOne({ deviceId: deviceId }).then(async (device) => {
        if (device) user = await [device.user, device.rank, device.deviceId];
    });
    return user;
};

const saveDataInDatabase = async (deviceId, sensor) => {
    const sensorData = {
        deviceId: deviceId,
        lat: sensor.split(",")[0],
        long: sensor.split(",")[1],
    };
    // const saveData = await GPS(sensorData);
    // await saveData.save();
    return sensorData;
};

module.exports.recieveDataInSocket = async (deviceId, sensor) => {
    let data = {};
    // console.log(deviceId, sensor);
    // const user = await checkInDatabase(deviceId);
    data = await saveDataInDatabase(deviceId, sensor);
    sockets.forEach(async (socket) => {
        if (data) sendMessege(socket, "LIVE_DATA", { deviceId, data });
    });
};
