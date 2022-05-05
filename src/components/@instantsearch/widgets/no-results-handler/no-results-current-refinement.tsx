import { useRecoilValue } from 'recoil';

import CustomCurrentRefinements from '@/components/facets/CurrentRefinement';

import { refinementCountAtom } from '@/config/refinementsConfig';

export function NoResultsCurrentRefinements() {
  const refinementCount = useRecoilValue(refinementCountAtom);
  console.log(refinementCount);

  if (refinementCount === 0) return null;

  return (
    <li>
      <span className="-ml-1.5">
        <span>You might also want to remove some filters</span>
        <CustomCurrentRefinements className="mt-2" />
      </span>
    </li>
  );
}
