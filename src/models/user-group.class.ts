export class UserGroup {
groupName: string;
groupColor: string;
groupUsers: string;
groupId: string;


constructor(obj?: any) {
    this.groupName = obj ? obj.groupName : '';
    this.groupColor = obj ? obj.groupColor : '';
    this.groupUsers = obj ? obj.groupUsers : '';
    this.groupId = obj ? obj.customIdName : '';
}

public toJSON(){
    return {
        groupName: this.groupName,
        groupColor: this.groupColor,
        groupUsers: this.groupUsers
    };
}
}