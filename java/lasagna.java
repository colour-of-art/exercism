public class lasagna {
    private static final int EXPECTED_MINUTES_IN_OVEN = 40;
    private static final int PREPARATION_MINUTES_PER_LAYER = 2;
    
    public int expectedMinutesInOven(){
        return EXPECTED_MINUTES_IN_OVEN;
    }
 
    public int remainingMinutesInOven(int mins){
        return expectedMinutesInOven() - mins;
    }
    
    public int preparationTimeInMinutes(int layers){
        return layers * PREPARATION_MINUTES_PER_LAYER;
    }
    
    public int totalTimeInMinutes(int layers, int mins){
        return preparationTimeInMinutes(layers) + mins;
    }
}
