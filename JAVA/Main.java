import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Enter the number:");
        int num = sc.nextInt();

        int even_count = 0;
        int odd_count = 0;

        for(int i = 1; i <= num; i++) {

            if(i % 2 == 0) {
                even_count++;
                System.out.println(i);
            }
            else {
                odd_count++;
            }
        }

        System.out.println("The number of even counts are: " + even_count);
        System.out.println("The number of odd counts are: " + odd_count);
    }
}