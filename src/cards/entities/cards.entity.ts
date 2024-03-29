import { IsString } from 'class-validator';
import { CommentsModel } from 'src/comments/entities/comments.entity';
import { BaseModel } from 'src/common/entities/base.entity';
import { ListsModel } from 'src/lists/entities/lists.entity';
import { UsersModel } from 'src/users/entities/users.entity';
import { Column, Entity, ManyToMany, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class CardsModel extends BaseModel {
    @Column()
    @IsString()
    title: string;

    @Column()
    @IsString()
    description: string;

    @Column()
    order: string;

    @Column()
    @IsString()
    color: string;

    /**
     * jihye
     * 마감일 추가
     */
    @Column()
    deadline: Date;

    /**
     * 리스트
     */
    @ManyToOne(() => ListsModel, (list) => list.cards, { onDelete: 'CASCADE' })
    list: ListsModel;

    /**
     * 카드 등록자
     */
    @ManyToOne(() => UsersModel, (user) => user.cards)
    user: UsersModel;

    @ManyToMany(() => UsersModel, (user) => user.works)
    workers: UsersModel[];

    @OneToMany(() => CommentsModel, (comments) => comments.card)
    comments: CommentsModel[];
}
