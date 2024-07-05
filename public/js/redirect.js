const role = localStorage.getItem('role');
if(role !== 'admin')
    window.location.href = '/CNPM_Final';
