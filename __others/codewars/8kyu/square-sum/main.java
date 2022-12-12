import java.util.Arrays;

public class Kata
 {
  public static int squareSum(int[] n) {
      return Arrays.stream(n).map(v -> v * v).sum();
  }

    public static int squareSum2(int[] numbers) {
        int sum = 0;
        for (int n : numbers) {
            sum += n * n;
        }

        return sum;
    }
 }
