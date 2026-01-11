class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        logest=0
        un_set=set(nums)
        if len(nums)==0:
            return 0
        for i in un_set:
            if  (i-1) not in  un_set:
                c=1
                x=i
                while (x+1) in  un_set:
                    x+=1
                    c+=1
                logest= max(logest,c)
        return logest

        
