class Site {
    constructor() {
        this.boards = [];
    } 

    addBoard(board) {
        const findBoard = this.boards.findIndex((i) => i.name === board.name);
        if (-1 === findBoard) {
           board.addedBoard = true;
            this.boards.push(board);    
        } else {
            throw "하나의 Site에 동일한 이름의 Board를 추가할 수 없습니다."
        }
    }

    findBoardByName(boardname) {
        const findBoard = this.boards.findIndex((i) => i.name === boardname);
        return this.boards[findBoard];
    }
}

class Board {
    constructor(board) {
        if (!board) throw "Board의 이름을 입력해 주세요."

        this.addedBoard = false;
        this.name = board;
        this.article = [];
    }

    publish(article) {
        if (!this.addedBoard) throw "Site에 추가되지 않은  Board입니다."

            article.id =  `${this.name}-${Math.random()}`
            article.createdDate = new Date().toISOString();
            //https://www.w3schools.com/jsref/jsref_toisostring.asp toISOString
            article.comment = [];
            this.article.push(article);
    }

    getAllArticles() {
        return this.article;
        //아티클 전부다 가져오기
    }
}

class Article {
    constructor(article){
        const { subject, content, author } = article;
            this.addedBoard = false;
            
            if (!subject) throw "subject를 입력해 주세요.'"
            
            if (!content) throw "content를 입력해 주세요.'"
            
            if (!author) throw "author를 입력해 주세요.'"
            
            this.subject = subject;
            this.content = content;
            this.author = author;
    }

    reply(comment) {
 
        comment.createdDate = new Date().toISOString();
        this.comment.push(comment);

    }

    getAllComments() {
        return this.comment;
    }
}

class Comment {
    constructor(comment) {
        const { content, author } = comment;

        if (!content) throw "content를 입력해 주세요."
        
        if (!author) throw "author를 입력해 주세요"
        
        this.content = content;
        this.author = author;
    }

}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};


