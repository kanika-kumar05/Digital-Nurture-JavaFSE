/*1. Understand Recursive Algorithms
        Recursion is a programming technique in which a method calls itself to solve a problem. A recursive solution breaks a large problem into smaller subproblems of the same type until a base condition is reached.
        
        In financial forecasting, recursion can be used to calculate future values by repeatedly applying a growth rate over a number of years. Each recursive call computes the value for one year and then uses that result to calculate the next year's value.
            Example
            If the current value is ₹10,000 and the annual growth rate is 10%:
                Year 0 = 10000
                Year 1 = 10000 × 1.10 = 11000
                Year 2 = 11000 × 1.10 = 12100
                Year 3 = 12100 × 1.10 = 13310 
            
            Using recursion:
                    futureValue(years) =futureValue(years - 1) * (1 + growthRate)
            with the base case:
                    if(years == 0)
                        return currentValue;
Advantages of Recursion
    Simplifies problems that can be divided into smaller similar subproblems.
    Produces cleaner and more readable code.
    Useful for mathematical computations and forecasting models.
    Reduces the need for complex looping logic in some scenarios.*/



public class FinancialForecast {

    // Recursive method to calculate future value
    public static double calculateFutureValue(double currentValue, double growthRate, int years) {

        // Base condition
        if (years == 0) {
            return currentValue;
        }

        // Recursive call
        return calculateFutureValue(currentValue, growthRate, years - 1) * (1 + growthRate);
    }

    public static void main(String[] args) {

        double currentValue = 10000;
        double growthRate = 0.10; // 10%
        int years = 5;

        double futureValue = calculateFutureValue(currentValue, growthRate, years);

        System.out.println("Current Value: " + currentValue);
        System.out.println("Growth Rate: " + (growthRate * 100) + "%");
        System.out.println("Years: " + years);
        System.out.println("Future Value: " + futureValue);

        System.out.println("\nTime Complexity: O(n)");
        System.out.println("Space Complexity: O(n) because of recursive call stack");
    }
}
            