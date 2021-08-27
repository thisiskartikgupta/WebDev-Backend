
import time
import asyncio

async def doTask1():
    print("Task 1 started")
    await asyncio.sleep(5)
    print("Task 1 ended")

async def doTask2():
    print("Task 2 started")
    await asyncio.sleep(2)
    print("Task 2 ended")

async def main():
    task1 = asyncio.create_task(doTask1())
    task2 = asyncio.create_task(doTask2())

    await task1
    await task2

asyncio.run(main())
