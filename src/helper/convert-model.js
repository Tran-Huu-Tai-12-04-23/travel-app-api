const path = require("path");
require("tfjs-node-save");
const tf = require("@tensorflow/tfjs-node-gpu");

class SingletonModel {
  static _instance = null;
  static models = { location: null, food: null }; // Khởi tạo models là một đối tượng

  static async loadModels() {
    if (!Object.values(this.models).some((model) => model)) {
      const locationPath = `file://${path.join(__dirname, "location.json")}`;
      const foodPath = `file://${path.join(__dirname, "food.json")}`;
      try {
        this.models.location = await tf.loadGraphModel(locationPath);
        this.models.food = await tf.loadGraphModel(foodPath);
      } catch (error) {
        console.error("Error loading models:", error);
      }
    }
  }

  static get_instance() {
    if (!this._instance) {
      this._instance = new this();
    }
    return this._instance;
  }
}

class LocationModel extends SingletonModel {
  async predict(imageTensor) {
    await SingletonModel.loadModels();
    const model = this.models.location;

    try {
      if (!model) throw new Error("Model not loaded");
      const predictions = model.predict(imageTensor);
      const predictedClass = predictions.argMax(1).dataSync()[0];
      const classes = [
        "Bao_Tang_Chung_Tich_Chien_Tranh",
        "Bao_Tang_Lich_Su",
        "Bao_Tang_My_Thuat",
        "Bao_Tang_Thanh_Pho",
        "Ben_Nha_Rong",
        "Bitexco",
        "Bui_Vien_Tay",
        "Buu_Dien_TPHCM",
        "Cau_Mong",
        "Cho_Ben_Thanh",
        "Cho_Binh_Tay",
        "Chua_Ba_Thien_Hau",
        "Chua_Buu_Long",
        "Chua_Ngoc_Hoang",
        "Chua_Phap_Hoa",
        "Chua_Vinh_Nghiem",
        "Cot_Co_Thu_Ngu",
        "Dinh_Doc_Lap",
        "Ho_Con_Rua",
        "Landmark_81",
        "Nha_Hat_Thanh_Pho",
        "Nha_Tho_Duc_Ba",
        "Nha_Tho_Giao_Xu_Tan_Dinh",
        "Thao_Cam_Vien",
        "UBND_TPHCM",
        "Unknown",
      ];
      const className = classes[predictedClass];
      return className;
    } catch (error) {
      console.error("Error during prediction:", error);
      return "Unknown"; // Trả về giá trị mặc định khi có lỗi
    }
  }
}

class FoodModel extends SingletonModel {
  async predict(imageTensor) {
    await SingletonModel.loadModels();
    const model = this.models.food;

    try {
      if (!model) throw new Error("Model not loaded");
      const predictions = model.predict(imageTensor);
      const predictedClass = predictions.argMax(1).dataSync()[0];
      const classes = [
        "Banh_Beo",
        "Banh_Can",
        "Banh_Gio",
        "Banh_Mi",
        "Banh_Trang_Nuong",
        "Banh_Xeo",
        "Bap_Xao",
        "Bun_Bo",
        "Bun_Cha",
        "Bun_Dau",
        "Bun_Mam",
        "Bun_Thit_Nuong",
        "Cao_Lau",
        "Chao_Long",
        "Com_Tam",
        "Goi_Cuon",
        "Hu_Tieu",
        "Mi_Quang",
        "Pha_Lau",
        "Pho",
        "Unknown",
      ];
      const className = classes[predictedClass];
      return className;
    } catch (error) {
      console.error("Error during prediction:", error);
      return "Unknown"; // Trả về giá trị mặc định khi có lỗi
    }
  }
}

module.exports = { LocationModel, FoodModel };
