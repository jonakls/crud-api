const cache = {};

const addData = (key, value) => {
    cache[key] = value;
};

const getData = (key) => {
    return cache[key];
};

const deleteData = (key) => {
    delete cache[key];
};

const editData = (key, value) => {
    cache[key] = value;
}

const getAllData = () => {
    return cache;
}

module.exports = {
    addData: addData,
    getData: getData,
    deleteData: deleteData,
    editData: editData,
    getAllData: getAllData
};
