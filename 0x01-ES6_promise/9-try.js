export default function guardrail(mathFunction) {
  let queue = [];

  try {
    let val = mathFunction();
    queue.push(val);
  } catch (error) {
    queue.push(error.toString());
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
