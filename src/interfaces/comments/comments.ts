
export interface Comment {
    id: string;
    author: {
      name: string;
      avatar: string;
    };
    content: string;
    timestamp: string;
  }