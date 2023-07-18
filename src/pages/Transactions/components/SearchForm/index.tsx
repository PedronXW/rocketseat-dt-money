import { zodResolver } from '@hookform/resolvers/zod'
import { memo } from 'react'
import { useForm } from 'react-hook-form'
import { useContextSelector } from 'use-context-selector'
import { z } from 'zod'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'
import { SearchFormContainer } from './style'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

function SearchFormComponent() {
  const fetchTransactions = useContextSelector(TransactionsContext, (ctx) => {
    return ctx.fetchTransactions
  })

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransaction(data: SearchFormInputs) {
    await fetchTransactions(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransaction)}>
      <input {...register('query')} type="text" placeholder="Pesquisar" />
      <button type="submit" disabled={isSubmitting}>
        Pesquisar
      </button>
    </SearchFormContainer>
  )
}

export const SearchForm = memo(SearchFormComponent)
