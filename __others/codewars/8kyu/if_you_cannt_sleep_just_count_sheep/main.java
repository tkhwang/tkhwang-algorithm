class Kata {
    public static String countingSheep(int num) {
        String result = "";

        for (int i = 1; i <= num; i += 1) {
            result += i + " sheep...";
        }
        return result;
    }

    public static String countingSheep2(int num) {
        StringBuilder stringBuilder = new StringBuilder();
        for (int i = 1; i <= num; i++) {
            stringBuilder.append(i).append(" sheep...");
        }
        return stringBuilder.toString();
    }
}
