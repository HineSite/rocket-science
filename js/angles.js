class Angles {
    static PI_180 = (Math.PI / 180);
    static FULL_PI = (2 * Math.PI);
    static HALF_PI = (Math.PI);
    static QUARTER_PI = (.5 * Math.PI);

    static toDegrees (radians) {
        return (radians / Angles.PI_180);
    }

    static toRadians (degrees) {
        return (degrees * Angles.PI_180);
    }
}
