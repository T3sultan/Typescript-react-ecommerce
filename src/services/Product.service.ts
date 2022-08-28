import httpReq from "./http.service";

class ProductService {
  async getAllProducts(): Promise<any[]> {
    const { data } = await httpReq.get("/product");
    return data;
  }
}

export default new ProductService();
