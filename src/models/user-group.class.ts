export class userGroup {
groupName: string;
groupColor: string;
groupUsers: string;


constructor(obj?: any) {
    this.groupName = obj ? obj.groupName : '';
    this.groupColor = obj ? obj.groupColor : '';
    this.groupUsers = obj ? obj.groupUsers : '';
}

public toJSON(){
    return {
        groupName: this.groupName,
        groupColor: this.groupColor,
        groupUsers: this.groupUsers
    };
}
}