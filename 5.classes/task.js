//1 

class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }

    fix() {
        this.state = this._state * 1.5;   
    }

    set state(newState) {
        if (newState < 0) {
            this._state = 0;
        } else if (newState > 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }

    get state () {
        return this._state;
    }   
}

class Magazine extends PrintEditionItem {
    
    constructor (name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount); 
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount); 
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount); 
        this.type = "detective";
    }
}

//2

class Library {
    constructor (name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        //console.log(book);
        if (book._state > 30) {
            this.books.push(book);
        }
    }
    

    findBookBy(type, value) {
        let result = this.books.find(item => (item[type] === value));

        if (result === undefined) {
            return null;
        } else {
            return result;
        }
    }

    giveBookByName(bookName) {
        let result = this.findBookBy("name", bookName);
    
        if (result) {
            this.books.splice(this.books.indexOf(result), 1);
        } 

        return result;
    }
}


//3

class Student {
    constructor (name) {
      this.name = name;
      this.marks = {};
  }
  
    addMark (mark, subject) {
      if (mark < 2 || mark > 5) {
        return;
      }
  
      if (!this.marks.hasOwnProperty(subject)) {
        this.marks[subject] = [];
      }
      
      this.marks[subject].push(mark);
    }
  
    getAverageBySubject (subject) { 
      if (!this.marks.hasOwnProperty(subject)) {
        return 0;
      }
  
      return this.marks[subject].reduce((acc, mark) => acc + mark, 0) / this.marks[subject].length;
    }
  
    getAverage() {
      let keyArr = Object.keys(this.marks);
  
      return keyArr.reduce((average, item, index) => average + this.getAverageBySubject(keyArr[index]) / keyArr.length, 0);
  
    }
  }
  