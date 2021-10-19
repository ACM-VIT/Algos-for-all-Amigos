#include<iostream>
#include<bits/stdc++.h>
using namespace std;
int main()
{
    int n; 
    cout<<"Enter number of elements in array n="; cin>>n;
    int a[n];
    cout<<"Enter "<<n<<" elements in array"<<endl;
    for(int i=0; i<n; i++)
    {
        cin>>a[i];
    }

    sort(a,a+n);
    cout<<"Smallest Element Of An Array is "<<a[0]<<endl; 
    return 0;
}