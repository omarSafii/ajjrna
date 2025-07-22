type AwaitProps<T> = {
  promise: Promise<T>;
  children: (value: T) => JSX.Element;
};

export default async function Await<T>({ promise, children }: AwaitProps<T>) {
  const data = await promise;
  return children(data);
}
