interface showTitle {
    itemTitle(): string;
}

class bloPost implements showTitle {
    title: string;

    constructor(title: string) {
        this.title = title;
    }

    itemTitle(): string {
        return `O título do post é: ${this.title}`
    }
}

const myPost = new bloPost("Hello World");
console.log(myPost.itemTitle())

class TestingInterface implements showTitle {
    title: string;

    constructor(title: string) {
        this.title = title;
    }

    itemTitle(): string {
        return `O título do é: ${this.title}`
    }
}