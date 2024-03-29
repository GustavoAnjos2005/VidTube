export const API_KEY = 'AIzaSyCQ3CPXRNV2CyfJjkM3L5HR9Z-1A72QzNk';

export const value_converter = (value) => {
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"mi";
    }
    else if(value>=1000)
    {
        return  Math.floor(value/1000)+"mil";
    }
    else{
        return value;
    }

}