import JobApplication from "../types/job-application";

interface JobTableProps {
	applicationHistory: JobApplication[];
}

export default function JobTable({applicationHistory}: JobTableProps) {
	return (<table>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Company</th>
      <th scope="col">Position</th>
      <th scope="col">Applied Date</th>
      <th scope="col">URL</th>
    </tr>
  </thead>
  <tbody>
		{applicationHistory.map((jobInfo, index) => (
			<tr>
			<th scope="row">{index}</th>
			<td>{jobInfo.company}</td>
			<td>{jobInfo.position}</td>
			<td>{jobInfo.appliedDate.toISOString()}</td>
			<td>{jobInfo.url}</td>
			</tr>
		))}
  </tbody>
</table>)
}