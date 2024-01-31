import axios from "axios";

export class CallEndpoint {
  // Properties
  private baseUrl: string;
  private AddedUrl: string;
  private FullUrl: string;

  // Constructor
  constructor(baseUrl: string = "http://localhost:8000/", AddedUrl: string) {
    this.baseUrl = baseUrl;
    this.AddedUrl = AddedUrl;
    this.FullUrl = this.baseUrl + this.AddedUrl;
  }

  // Methods
  async signup(formData: {
    email: string;
    username: string;
    password: string;
    ConfirmPassword: string;
  }): Promise<{ status: string } | { message: string }> {
    const response = await axios.post<{ status: string } | { message: string }>(
      this.FullUrl,
      formData
    );

    return response.data;
  }

  // log in
  async signin(formData: {
    email: string;
    password: string;
  }): Promise<{ access_token: string; message: string }> {
    const response = await axios.post<any>(this.FullUrl, formData);
    return response.data;
  }
  // my profile
  async myprofile(
    token: string
  ): Promise<{ id: number; username: string; email: string }> {
    const response = await axios.get(this.FullUrl, {
      headers: {
        Authorization: `Bearer ${token}`, // Send the token in the header
      },
    });
    return response.data;
  }
  // FindAllFishesRelatedToUser
  async FindAllFishesRelatedToUser(
    token: string
  ): Promise<[{ email: string; password: string; user: {} }]> {
    const response = await axios.get(this.FullUrl, {
      headers: {
        Authorization: `Bearer ${token}`, // Send the token in the header
      },
    });
    return response.data;
  }
}
