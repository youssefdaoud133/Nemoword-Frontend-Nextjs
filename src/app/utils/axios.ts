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
}
