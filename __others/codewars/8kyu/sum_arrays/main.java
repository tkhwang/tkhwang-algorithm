public class SumArray {

    public static double sum(double[] numbers) {
        double sum = 0;

        for (double number : numbers) {
            sum += number;
        }
        return sum;
    }

    public static double sum2(double[] numbers) {
        return Arrays.stream(numbers).sum();
    }
}
