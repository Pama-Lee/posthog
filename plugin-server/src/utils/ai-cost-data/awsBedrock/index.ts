/**
 *
 * DO NOT EDIT THIS FILE UNLESS IT IS IN /costs
 */
import { ModelRow } from '../../../types'

export const costs: ModelRow[] = [
    {
        model: {
            operator: 'equals',
            value: 'meta.llama3-8b-instruct-v1%3A0',
        },
        cost: {
            prompt_token: 0.00022,
            completion_token: 0.00072,
        },
    },
]
