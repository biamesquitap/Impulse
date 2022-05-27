import { CloseButton } from "../../CloseButton";

interface FeedbackSucessStepProps {
  onFeedbackRestartRequested: () => void; 
}

export function FeedbackSucessStep({onFeedbackRestartRequested}: FeedbackSucessStepProps) {
  return (
  <>
  <header>
    <CloseButton/>
  </header>

  <div className="flex flex-col items-center py-10 w-[304px]">
     <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.78 1.36202C22.624 0.61102 21.076 0.94002 20.322 2.09802L9.436 18.877L4.407 14.227C3.393 13.289 1.811 13.352 0.873996 14.365C-0.063004 15.379 -0.0010041 16.961 1.013 17.898L8.222 24.564C8.702 25.009 9.312 25.229 9.918 25.229C10.591 25.229 11.452 24.947 12.017 24.09C12.349 23.584 24.517 4.82002 24.517 4.82002C25.268 3.66102 24.938 2.11302 23.78 1.36202Z" fill="white"/>
</svg>

  <span className="text-xl mt-8"> Agradecemos o feedback! </span>

    <button
    type="button"
    onCLick={onFeedbackRestartRequested}
    className="py-2 px-6 mt-6 bg-zinc80 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 "
    > Quero enviar outro </button>

  </div>
  </>
)}