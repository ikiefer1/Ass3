const {performance} = require('perf_hooks');
function tsp_hk(distance_matrix)
{
  if(distance_matrix.length<=1)
  {
    return 0;
  }
  var cities = JSON.parse(JSON.stringify(distance_matrix));

  //var distance =Number.
  var distances= []
  var tmp;
  var mem = []
//  for(var i=0; i<distance_matrix.length;i++)
  //{
  //  mem.push([])
  //}


  for(var i =0; i<distance_matrix.length;i++)
  {

    distances.push("Start "+i+": "+heldKarp(cities,i,mem))

  /*  tmp=heldKarp(cities,i,mem);
    if(tmp<distance)
    {
      distance=tmp
    }
*/
  }

  //console.log(mem)
  return distances;//[0];
  //var start = cities[0];//or just 0
  //heldKarp(cities,start);
}
function heldKarp(cities, start,mem)
{
  //console.log(cities.length)
  var city;
  var val;
  var gold;
  //var mem =JSON.parse(JSON.stringify(memoize));
  var totall =Number.POSITIVE_INFINITY
var fin =0;
var key = JSON.stringify(cities)

  if (cities.length == 2)
  {
    //console.log("cities/start "+cities +" / " +start)
    var tmp = JSON.parse(JSON.stringify(cities));
    tmp.splice(start,1)

    for(var i=0;i<tmp[0].length;i++)
    {

      if (tmp[0][i]===0)
      {
         gold=i
          break;
      }
    }
    //mem[key][start]=cities[start][gold]
    return cities[start][gold];
  }
/*  if(mem[key]===undefined)
    {mem[key]=[]  }
    if(mem[key][start]!==undefined)
    {
      //console.log(mem[key][start])
      //console.log("SALVATION?")
      return mem[key][start]
    }
*/
  else{

    for(var k =0; k<cities.length; k++)
    {
      //console.log("cities"+k+"  "+cities)
      //console.log(memoize[start][k])
      if(cities[start][k]==0)// || memoize[start][k]!==undefined)
      {

      }

      else{//} if (mem[start][k]===undefined){

        var tmp = JSON.parse(JSON.stringify(cities));
        //console.log("new tmp "+tmp)
        tmp.splice(start,1)
        for (var i in tmp)
        {
          tmp[i].splice(start,1)
        }
       //console.log(tmp)

        //cities.splice(start,1)
       if(start>k)
       {
         city=k
          //console.log("first k "+k)
        }
        else{

          city=k-1
          //console.log("k "+k)
          //console.log("start "+start)
        }
      val=  heldKarp(tmp,city,mem)+ cities[start][k]
      ///mem[start][k]=val

      if (val<totall)//&&fin==cities.length -1)
      {

        totall =val
        //mem[start][k]=totall
      }
      }
      //else{
        //  console.log("SALVATION???")
        //console.log("ZZZZZZZZZZZZZZZZZZZ")
          //return mem[start][k]
    //}
  }
  //console.log("MEM "+memoize)
    //mem[key][start]=totall
    return totall;
  }
}
var arrr = [[0,4,57,300],[4,0,3,1],[57,3,0,4],[300,1,4,0]]
var simp = [[0,2,3],[2,0,4],[3,4,0]]
var five = [[0,5,6,13,27],[5,0,12,14,7],[6,12,0,2,3],[13,14,14,0,8],[27,7,3,8,0]]
var zero = []
var one = [[1]]
var two = [[0,2],[2,0]]
console.time('Execution Time')
console.log(tsp_hk(arrr))
console.timeEnd('Execution Time')

var big =[
        [0, 2451, 713, 1018, 1631, 1374, 2408, 213, 2571, 875, 1420, 2145, 1972],
        [2451, 0, 1745, 1524, 831, 1240, 959, 2596, 403, 1589, 1374, 357, 579],
        [713, 1745, 0, 355, 920, 803, 1737, 851, 1858, 262, 940, 1453, 1260],
        [1018, 1524, 355, 0, 700, 862, 1395, 1123, 1584, 466, 1056, 1280, 987],
        [1631, 831, 920, 700, 0, 663, 1021, 1769, 949, 796, 879, 586, 371],
        [1374, 1240, 803, 862, 663, 0, 1681, 1551, 1765, 547, 225, 887, 999],
        [2408, 959, 1737, 1395, 1021, 1681, 0, 2493, 678, 1724, 1891, 1114, 701],
        [213, 2596, 851, 1123, 1769, 1551, 2493, 0, 2699, 1038, 1605, 2300, 2099],
        [2571, 403, 1858, 1584, 949, 1765, 678, 2699, 0, 1744, 1645, 653, 600],
        [875, 1589, 262, 466, 796, 547, 1724, 1038, 1744, 0, 679, 1272, 1162],
        [1420, 1374, 940, 1056, 879, 225, 1891, 1605, 1645, 679, 0, 1017, 1200],
        [2145, 357, 1453, 1280, 586, 887, 1114, 2300, 653, 1272, 1017, 0, 504],
        [1972, 579, 1260, 987, 371, 999, 701, 2099, 600, 1162, 1200, 504, 0],
    ]
    var six =[
            [0, 2451, 713, 1018, 1631, 1374],
            [2451, 0, 1745, 1524, 831, 1240],
            [713, 1745, 0, 355, 920, 803],
            [1018, 1524, 355, 0, 700, 862],
            [1631, 831, 920, 700, 0, 663],
            [1374, 1240, 803, 862, 663, 0]
        ]

        var eight =[
                [0, 2451, 713, 1018, 1631, 1374, 2408, 213],
                [2451, 0, 1745, 1524, 831, 1240, 959, 2596],
                [713, 1745, 0, 355, 920, 803, 1737, 851],
                [1018, 1524, 355, 0, 700, 862, 1395, 1123],
                [1631, 831, 920, 700, 0, 663, 1021, 1769],
                [1374, 1240, 803, 862, 663, 0, 1681, 1551],
                [2408, 959, 1737, 1395, 1021, 1681, 0, 2493],
                [213, 2596, 851, 1123, 1769, 1551, 2493, 0],
            ]
    var bigger =[
            [0, 2451, 713, 1018, 1631, 1374, 2408, 213, 2571, 875, 1420, 2145, 1972,2300,2100,100,3750],
            [2451, 0, 1745, 1524, 831, 1240, 959, 2596, 403, 1589, 1374, 357, 579,2300,2100,100,3750],
            [713, 1745, 0, 355, 920, 803, 1737, 851, 1858, 262, 940, 1453, 1260,2300,2100,100,3750],
            [1018, 1524, 355, 0, 700, 862, 1395, 1123, 1584, 466, 1056, 1280, 987,2300,2100,100,3750],
            [1631, 831, 920, 700, 0, 663, 1021, 1769, 949, 796, 879, 586, 371,2300,2100,100,3750],
            [1374, 1240, 803, 862, 663, 0, 1681, 1551, 1765, 547, 225, 887, 999,2300,2100,100,3750],
            [2408, 959, 1737, 1395, 1021, 1681, 0, 2493, 678, 1724, 1891, 1114, 701,2300,2100,100,3750],
            [213, 2596, 851, 1123, 1769, 1551, 2493, 0, 2699, 1038, 1605, 2300, 2099,2300,2100,100,3750],
            [2571, 403, 1858, 1584, 949, 1765, 678, 2699, 0, 1744, 1645, 653, 600,2300,2100,100,3750],
            [875, 1589, 262, 466, 796, 547, 1724, 1038, 1744, 0, 679, 1272, 1162,2300,2100,100,3750],
            [1420, 1374, 940, 1056, 879, 225, 1891, 1605, 1645, 679, 0, 1017, 1200,2300,2100,100,3750],
            [2145, 357, 1453, 1280, 586, 887, 1114, 2300, 653, 1272, 1017, 0, 504,2300,2100,100,3750],
            [1972, 579, 1260, 987, 371, 999, 701, 2099, 600, 1162, 1200, 504, 0,2300,2100,100,3750],
            [1972, 579, 1260, 987, 371, 999, 701, 2099, 600, 1162, 1200, 504, 2300,0,2100,100,3750],
            [1972, 579, 1260, 987, 371, 999, 701, 2099, 600, 1162, 1200, 504, 2300,2100,0,100,3750],
            [1972, 579, 1260, 987, 371, 999, 701, 2099, 600, 1162, 1200, 504, 100,2300,2100,0,3750],
            [1972, 579, 1260, 987, 371, 999, 701, 2099, 600, 1162, 1200, 504, 3750,2300,2100,100,0]
        ]
        var ten =[
                [0, 2451, 713, 1018, 1631, 1374, 2408, 213, 2571, 875],
                [2451, 0, 1745, 1524, 831, 1240, 959, 2596, 403, 1589],
                [713, 1745, 0, 355, 920, 803, 1737, 851, 1858, 262],
                [1018, 1524, 355, 0, 700, 862, 1395, 1123, 1584, 466],
                [1631, 831, 920, 700, 0, 663, 1021, 1769, 949, 796],
                [1374, 1240, 803, 862, 663, 0, 1681, 1551, 1765, 547],
                [2408, 959, 1737, 1395, 1021, 1681, 0, 2493, 678, 1724],
                [213, 2596, 851, 1123, 1769, 1551, 2493, 0, 2699, 1038],
                [2571, 403, 1858, 1584, 949, 1765, 678, 2699, 0, 1744],
                [875, 1589, 262, 466, 796, 547, 1724, 1038, 1744, 0],

            ]
  //  var d = new Date();
    //var n = d.getTime();
      //console.log("BEGIN TIME " +n);
console.time('Execution BIG Time')
console.log(tsp_hk(big))
console.timeEnd('Execution BIG Time')
var t0 = performance.now()
console.log(tsp_hk(five))
var t1 = performance.now()
console.log(t1 -t0 +"ms")
var start = new Date();
console.log(tsp_hk(arrr))
var end = new Date();
console.log("recent "+start.getTime()+" "+end.getTime()+" "+(end.getTime()-start.getTime()))
console.time('Execution Time')
console.log(tsp_hk(arrr))
console.timeEnd('Execution Time')

//var d = new Date();
//var n = d.getTime();
  ///console.log("END TIME " +n);
