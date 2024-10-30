import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/24/outline';

interface ICustomPagination {
  pageCount: number;
  pageIndex: number;
  onPageChange: (page: number) => void;
}

const CustomPagination = ({
  pageCount,
  pageIndex,
  onPageChange,
}: ICustomPagination) => {
  const handlePrevious = () => {
    if (pageIndex > 1) {
      onPageChange(pageIndex - 1);
    }
  };

  const handleNext = () => {
    if (pageIndex < pageCount) {
      onPageChange(pageIndex + 1);
    }
  };

  return (
    <section className="flex flex-col gap-4 px-5">
      <section className="flex items-center justify-between gap-2 text-xs md:text-sm">
        <button
          className="pagination-btn"
          onClick={handlePrevious}
          disabled={pageIndex === 1}
        >
          {pageIndex <= 1 ? (
            ''
          ) : (
            <>
              <ArrowLongLeftIcon className="h-5 w-5" /> <span>Previous</span>
            </>
          )}
        </button>
        <div className="hidden sm:inline-block">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1">
              <div>Page</div>
              <strong>
                {pageIndex} of {pageCount}
              </strong>
            </span>
            <span className="flex items-center gap-1">
              Go to page:
              <input
                type="number"
                defaultValue={pageIndex ?? 1}
                onChange={(e) => {
                  const page = Number(e.target.value);
                  if (page > pageCount) {
                    return;
                  }
                  onPageChange(page === 0 ? 1 : page);
                }}
                className="border p-1 rounded w-12 outline-none focus:border-[#FC804A]"
              />
            </span>
          </div>
        </div>

        <button
          className="pagination-btn"
          onClick={handleNext}
          disabled={pageIndex === pageCount}
        >
          {pageIndex === pageCount ? (
            ''
          ) : (
            <>
              <span>Next</span>
              <ArrowLongRightIcon className="h-5 w-5" />{' '}
            </>
          )}
        </button>
      </section>

      <br />
    </section>
  );
};

export default CustomPagination;
