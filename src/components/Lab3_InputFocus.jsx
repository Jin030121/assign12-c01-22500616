import { useRef } from 'react';

// LAB 3 (Slide 15): Input Focus with useRef
export default function Lab3InputFocus() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const clearInput = () => {
    if (!inputRef.current) return;

    inputRef.current.value = '';
    inputRef.current.focus();
  };

  return (
    <div>
      <p className="hint">
        Focus 버튼은 입력창으로 이동하고, Clear 버튼은 내용을 지운 뒤 Focus합니다.
      </p>
      <label htmlFor="student-name" className="hint">Name</label>
      <input
        id="student-name"
        className="field"
        placeholder="Enter your name"
        ref={inputRef}
      />
      <div className="controls">
        <button onClick={focusInput}>Focus</button>
        <button className="secondary" onClick={clearInput}>Clear</button>
      </div>
    </div>
  );
}