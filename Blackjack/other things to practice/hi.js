// var merge = function() {
    nums1 = [-1,0,0,3,3,3,0,0,0];
    nums2 = [1,2,2];
    let j=0;
    for(let i =0; i<nums1.length;i++)
    {
        
        if(nums1[i]==0)
        {
            nums1[i]=nums2[j];
            j++;
            //console.log(nums2++);
        }
    
    }
    console.log(nums1);
    nums1.sort((a,b)=>a-b);
    console.log(nums1);

//};
//console.log(merge);