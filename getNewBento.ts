const apiUrl = "https://opbento.edgexhq.tech/api/bento?n=B%20Jnyanadeep&g=JDeep1234&x=&l=www.linkedin.com%2Fin%2Fbjnyanadeep&i=https%3A%2F%2Ft4.ftcdn.net%2Fjpg%2F08%2F26%2F29%2F79%2F360_F_826297995_gHRLKyv4GIP3m59PPertUglA2bTG9eoc.jpg&p=https%3A%2F%2Fjdeepportfolio.vercel.app%2F&z=8dd1c";
interface BentoResponse {
  url: string;
}

const fetchBentoUrl = async (apiUrl: string): Promise<string> => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: BentoResponse = (await response.json()) as BentoResponse;
    return data.url;
  } catch (error) {
    console.error("Error fetching Bento URL:", error);
    throw error;
  }
};

// @ts-ignore
fetchBentoUrl(apiUrl);
