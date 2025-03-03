import java.util.stream.IntStream;

public class SmallestIntegerFinder {
    public static int findSmallestInt(int[] args) {
        int smallest = Integer.MAX_VALUE;
        for (int i : args)
            smallest = (smallest > i) ? i : smallest;
        return smallest;
    }

    public static int findSmallestInt2(int[] args) {
        return IntStream.of(args).min().getAsInt();
    }

    public static int findSmallestInt3(int[] args) {
        return IntStream.of(args).min().getAsInt();
    }

    public static int findSmallestInt4(int[] args) {
        return Arrays.stream(args).min().getAsInt();
    }
}
