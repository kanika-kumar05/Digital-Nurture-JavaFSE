class Logger{
    // creating intsance
    private static Logger instance;

    // private constructor
    private Logger(){
        System.out.println("Logger instance created");
    }

    // method to get instance
    public static Logger getInstance(){
        if (instance==null){
            instance=new Logger();
        }
        return instance;
    }

    // Logging method
    public void log(String message){
        System.out.println("LOG"+message);
    }
}