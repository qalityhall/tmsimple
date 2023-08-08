import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { TestCasePriority } from './test-case-priority.entity'
import { TestCaseType } from './test-case-type.entity'

@Entity()
export class TestCase {
    @PrimaryGeneratedColumn('uuid')
    id?: string

    @Column()
    description: string

    @Column()
    name: string

    @Column()
    type: TestCaseType

    @Column()
    priority: TestCasePriority

    @Column()
    precondition: string
}
