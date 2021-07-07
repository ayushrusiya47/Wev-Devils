#include<bits/stdc++.h>
using namespace std;
#define ll long long
#define vi vector<int>
#define vvi vector<vi> 
#define vll vector<ll> 
#define mll map<ll , ll > 
#define pll pair<ll , ll> 
#define vpll vector<pll> 
#define EB emplace_back 
#define F first 
#define S second 
const int N = int(1e5 + 3);
#define no cout << "NO" << '\n'
#define yes cout << "YES" << '\n'
#define endl  "\n"
void solve(){
    ll n;
    cin>>n;
    ll a[n];
    ll odd=0, even=0;
    for(ll i=0;i<2*n;i++){
        cin>>a[i];
        if(a[i]&1){
            odd++;
        }
        else{
            even++;
        }
    }
    if(odd==even){
        yes;
        return;
    }
    else{
        no;
        return;
    }
}
int main(){
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    ll t;
    cin>>t;
    while(t--){
        solve();
    }
return 0;
}