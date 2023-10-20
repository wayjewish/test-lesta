export interface IVehicle {
  title: string;
  description: string;
  level: number;
  icons: {
    medium: string;
  };
  type: {
    name: string;
    title: string;
    icons: {
      default: string;
    };
  };
  nation: {
    name: string;
    title: string;
    icons: {
      large: string;
    };
  };
}
