public class Kata {
  public static String greet(String name) {
      return "Hello, " + name + " how are you doing today?";
  }

    public static String greet2(String name) {
    return String.format("Hello, %s how are you doing today?", name);
  }
}
