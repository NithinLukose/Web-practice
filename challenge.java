import java.util.*; 
public class AGoldenCrown {
    Map<String,String> kingdomAndAnimal = new HashMap<String,String>();
    String kingdom = "";
    String animal = "";
    AGoldenCrown(){
        kingdomAndAnimal.put("Space","Gorilla");
        kingdomAndAnimal.put("Land","Panda");
        kingdomAndAnimal.put("Water","Octopus");
        kingdomAndAnimal.put("Ice","Mammoth");
        kingdomAndAnimal.put("Air","Owl");
        kingdomAndAnimal.put("Fire","Dragon");
    }
    String getKingdomFromInput(String input){
        
        
        int indexOfComma = input.indexOf(",");
        String kingdom = input.substring(0,indexOfComma);
        return kingdom;
        
    }
    void setKingdom(String kingdom){
        this.kingdom = kingdom;
    }
    void setAnimal(String animal){
        this.animal = animal;
    }
    String getAnimal(){
        
        String str1 = "";
        String str2 = "";
        for(Map.Entry m:this.kingdomAndAnimal.entrySet()){  
            str1 = (String)m.getKey();
            
            if(str1.equals(this.kingdom)){
                str2 = (String)m.getValue();
                
            }  
        }
        return str2;
        
    }
    void decodeSecretMessage(String input){
        
        int indexOfComma = input.indexOf(",");
        String msg = input.substring(indexOfComma+1,input.length());
        System.out.println(msg);
        
        
    }
    public static void main(String args[]) {
        
        AGoldenCrown obj = new AGoldenCrown();
        String kingdom = "";
        String animal = "";
        
        for(int i = 0;i<args.length;i++){
            kingdom = obj.getKingdomFromInput(args[i]);
            obj.setKingdom(kingdom);
            animal = obj.getAnimal();
            obj.setAnimal(animal);
            obj.decodeSecretMessage(args[i]);
        }
        
        
        /*for(Map.Entry m:obj.kingdomAndAnimal.entrySet()){  
            System.out.println(m.getKey()+" "+m.getValue());  
        }*/  
        
        
    }
}
