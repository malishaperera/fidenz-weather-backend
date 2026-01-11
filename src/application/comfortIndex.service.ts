interface ComfortInput {
    temperature: number;
    humidity: number;
    windSpeed: number;
}

export const calculateComfortIndex = ({
                                          temperature,
                                          humidity,
                                          windSpeed,
                                      }: ComfortInput): number => {

    const tempScore = Math.max(0, 100 - Math.abs(24 - temperature) * 5);
    const humidityScore = Math.max(0, 100 - humidity);
    const windScore = Math.min(100, windSpeed * 10);

    const comfortIndex =
        tempScore * 0.5 +
        humidityScore * 0.3 +
        windScore * 0.2;

    return Math.round(Math.min(100, Math.max(0, comfortIndex)));
};
