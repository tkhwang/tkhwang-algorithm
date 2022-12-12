import java.util.Arrays;

public class Positive{

    public static int sum(int[] arr) {
        int sum = 0;
        for (int value : arr) {
            if (value > 0)
                sum += value;
        }
        return sum;
    }


    public static int sum2(int[] arr){
        return Arrays.stream(arr).filter(v -> v > 0).sum();
    }

}
