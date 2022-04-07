// 在柠檬水摊上，每一杯柠檬水的售价为 5 美元。顾客排队购买你的产品，（按账单 bills 支付的顺序）一次购买一杯。

// 每位顾客只买一杯柠檬水，然后向你付 5 美元、10 美元或 20 美元。你必须给每个顾客正确找零，也就是说净交易是每位顾客向你支付 5 美元。

// 注意，一开始你手头没有任何零钱。

// 给你一个整数数组 bills ，其中 bills[i] 是第 i 位顾客付的账。如果你能给每位顾客正确找零，返回 true ，否则返回 false 。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/lemonade-change
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


// 输入：bills = [5,5,5,10,20]
// 输出：true
// 解释：
// 前 3 位顾客那里，我们按顺序收取 3 张 5 美元的钞票。
// 第 4 位顾客那里，我们收取一张 10 美元的钞票，并返还 5 美元。
// 第 5 位顾客那里，我们找还一张 10 美元的钞票和一张 5 美元的钞票。
// 由于所有客户都得到了正确的找零，所以我们输出 true。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/lemonade-change
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。



// 输入：bills = [5,5,10,10,20]
// 输出：false
// 解释：
// 前 2 位顾客那里，我们按顺序收取 2 张 5 美元的钞票。
// 对于接下来的 2 位顾客，我们收取一张 10 美元的钞票，然后返还 5 美元。
// 对于最后一位顾客，我们无法退回 15 美元，因为我们现在只有两张 10 美元的钞票。
// 由于不是每位顾客都得到了正确的找零，所以答案是 false。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/lemonade-change
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


// 1 <= bills.length <= 105
// bills[i] 不是 5 就是 10 或是 20 

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  if (bills[0] != 5) {
    return false
  }
  var meHave5 = 0
  var meHave10 = 0
  var canchange = function (bill) {
    if (bill == 5) {
      meHave5 += 1
      return true
    }
    if (bill == 10) {
      if (meHave5 >= 1) {
        meHave5 -= 1
        meHave10 += 1
        return true
      } else {
        return false
      }
    }
    if (bill == 20) {
      if (meHave5 >= 1) {
        if (meHave10 >= 1) {
          meHave5 -= 1
          meHave10 -= 1
          return true
        }
        if (meHave5 >= 3) {
          meHave5 -= 3
          return true
        }
      } else {
        return false
      }
    }
  }
  for (let i = 0; i < bills.length; i++) {
    const e = bills[i]
    if (!canchange(e)) {
      return false
    }
  }
  return true
};

lemonadeChange([5, 5, 5, 10, 20])

// 由于顾客只可能给你三个面值的钞票，而且我们一开始没有任何钞票，因此我们拥有的钞票面值只可能是 5 美元，10 美元和 20 美元三种。基于此，我们可以进行如下的分类讨论。

// 5 美元，由于柠檬水的价格也为 5 美元，因此我们直接收下即可。

// 10 美元，我们需要找回 5 美元，如果没有 5 美元面值的钞票，则无法正确找零。

// 20 美元，我们需要找回 15 美元，此时有两种组合方式，一种是一张 10 美元和 5 美元的钞票，一种是 3 张 5 美元的钞票，如果两种组合方式都没有，则无法正确找零。当可以正确找零时，两种找零的方式中我们更倾向于第一种，即如果存在 5 美元和 10 美元，我们就按第一种方式找零，否则按第二种方式找零，因为需要使用 5 美元的找零场景会比需要使用 10 美元的找零场景多，我们需要尽可能保留 5 美元的钞票。

// 基于此，我们维护两个变量 \textit{five}five 和 \textit{ten}ten 表示当前手中拥有的 55 美元和 1010 美元钞票的张数，从前往后遍历数组分类讨论即可。

// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/lemonade-change/solution/ning-meng-shui-zhao-ling-by-leetcode-sol-nvp7/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


// var lemonadeChange = function(bills) {
//   let five = 0, ten = 0;
//   for (const bill of bills) {
//       if (bill === 5) {
//           five += 1;
//       } else if (bill === 10) {
//           if (five === 0) {
//               return false;
//           }
//           five -= 1;
//           ten += 1;
//       } else {
//           if (five > 0 && ten > 0) {
//               five -= 1;
//               ten -= 1;
//           } else if (five >= 3) {
//               five -= 3;
//           } else {
//               return false;
//           }
//       }
//   }
//   return true;
// };

// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/lemonade-change/solution/ning-meng-shui-zhao-ling-by-leetcode-sol-nvp7/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。



// 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。

// 单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/length-of-last-word
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 输入：s = "   fly me   to   the moon  "
// 输出：4
// 解释：最后一个单词是“moon”，长度为4。


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {

};