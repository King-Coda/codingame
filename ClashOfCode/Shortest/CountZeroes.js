for(var N=readline(),v=[],i=0;i<N.length;i++)v[i]=N.charAt(i)-"0";for(var i=0,m=0,t=0;i<v.length;i++)0==v[i]?t++:t=0,t>m&&(m=t);print(m);