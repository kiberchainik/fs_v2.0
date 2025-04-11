import { Settings } from "@/features/candidat/components";

export default function CandidatePage() {
  return (
    <div className='flex gap-x-3 justify-between items-center'>
      {/* <p>Ваш профиль смотрели ...</p>
      <p>ваши гости...</p>
      <p>ваши конкуренты...</p> */}
      <Settings />
    </div>
  );
}