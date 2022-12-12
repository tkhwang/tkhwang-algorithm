import java.util.Arrays;

public class Kata{
    public static double find_average(int[] array) {
        if (array.length == 0)
            return 0;

        int sum = 0;

        for (int value : array) {
            sum += value;
        }

        return ((double) sum) / array.length;
    }

    public static double find_average2(int[] array){
        return Arrays.stream(array).average().orElse(0);
    }
}
