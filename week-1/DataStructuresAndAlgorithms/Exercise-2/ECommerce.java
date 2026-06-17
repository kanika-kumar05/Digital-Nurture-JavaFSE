/*1.Big O Notation ->Big O tells us how the running time grows as input size (n) increases.

    Linear Search ->Checks products one by one.
                    [Phone] [Laptop] [Mouse] [Keyboard]
                    Searching for Keyboard:
                    Phone -> Laptop -> Mouse -> Keyboard
                    Time Complexity:
                        Best Case: O(1) (first element)
                        Average Case: O(n)
                        Worst Case: O(n) (last element or not found)
                        
    Binary Search ->Works only on a sorted array.
                    101 102 103 104 105 106 107
                    Search 106:
                    Middle = 104
                    106 > 104
                    Search right half
                    Middle = 106
                    Found
                    Time Complexity:
                        Best Case: O(1)
                        Average Case: O(log n)
                        Worst Case: O(log n)*/


class Product{
    int productId;
    String productName;
    String category;

    Product(int productId,String productName,String category){
        this.productId=productId;
        this.productName=productName;
        this.category=category;
    }
    public String toString(){
        return productId+" "+productName+" "+category;
    }
}

class ECommerce{
    static Product linearSearch(Product[] products,int id){
        for(Product p:products){
            if(p.productId==id){
                return p;
            }
        }
        return null;
    }

    static Product binarySearch(Product[] products,int id){
        int low=0,high=products.length-1;

        while(low<=high){
            int mid=(low+high)/2;

            if(products[mid].productId==id)return products[mid];
            else if(products[mid].productId<id)low=mid+1;
            else high=mid-1;
        }
        return null;
    }
    public static void main(String[] args){
        // unsorted array
        Product[] linearProducts = {
            new Product(104, "Keyboard", "Accessories"),
            new Product(101, "Phone", "Electronics"),
            new Product(105, "Monitor", "Electronics"),
            new Product(102, "Laptop", "Electronics"),
            new Product(103, "Mouse", "Accessories")
        };

        // sorted array
        Product[] binaryProducts = {
            new Product(101, "Phone", "Electronics"),
            new Product(102, "Laptop", "Electronics"),
            new Product(103, "Mouse", "Accessories"),
            new Product(104, "Keyboard", "Accessories"),
            new Product(105, "Monitor", "Electronics")
        };

        int searchId = 104;

        System.out.println("Searching for Product ID: " + searchId);

        Product linearResult = linearSearch(linearProducts, searchId);

        System.out.println("\nLinear Search Result:");
        if (linearResult != null) {
            System.out.println(linearResult);
        } else {
            System.out.println("Product not found");
        }

        Product binaryResult = binarySearch(binaryProducts, searchId);

        System.out.println("\nBinary Search Result:");
        if (binaryResult != null) {
            System.out.println(binaryResult);
        } else {
            System.out.println("Product not found");
        }

        System.out.println("\nTime Complexity Analysis:");
        System.out.println("Linear Search  : Best O(1), Average O(n), Worst O(n)");
        System.out.println("Binary Search  : Best O(1), Average O(log n), Worst O(log n)");
        System.out.println("Binary Search is more efficient for large sorted datasets.");
    }
}