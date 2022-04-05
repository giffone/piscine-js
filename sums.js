let ans = {
    new : function (n) {
        this.n = n;
        this.answer = [];
        this.last = []; // last array in work
    },
    lenLast : function () {
        return this.last.length
    },
    addAnswer : function () {
        this.answer = [...this.answer, this.last]
    },
    addLast : function (n) {
        this.last = [...this.last, n - 1]
    },
    cutLast : function () {
        this.last = this.last.slice(0,-1);
    },
    check : function () {
        let sum = this.last.reduce((prev, curr) => prev + curr, 0)
        if (sum === this.n) {
            return 0;
        }
        return this.n - sum;
    },
    make : function () {
        while (this.last.length !== 1) {
            this.cutLast();
            let l = this.lenLast();
            for (let i = l - 1; i < l; i++) {
                this.last[i]++;
                let c = this.check()
                if (c === 0) {
                    this.addAnswer();
                    break;
                } else if (c < this.last[i] && l === 1) {
                    break;
                } else if (c < this.last[i]) {
                    i--
                    continue;
                }
                this.addLast(this.last[i])
                l = this.lenLast();
            }
        }
    },
};

const sums = (n) => {
    if (n < 2) return [];
    else if (n === 2) return [[1, 1]];
    ans.new(n)
    ans.last = Array.from(Array(n).fill(1));
    ans.addAnswer();
    ans.make();
    return ans.answer;
}