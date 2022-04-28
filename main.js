const array = [22,22,1,76,8,4]

const insertionSort = array =>
{
    for(i = 0 ; i < array.length ; i ++)
    {
        if(array[i] < array[0])
        {
            array.unshift(array.splice(i,1)[0])
        }
        if(array[i] < array[i-1])
        {
            for(j = 1 ; j < i ; j ++)
            {
                if(array[i] >= array[j-1] && array[i] < array[j])
                {
                    array.splice(j,0, array.splice(i,1)[0])
                }
            }
        }
    } return array 
}

console.log(insertionSort(array))